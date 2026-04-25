#!/usr/bin/env bash
#
# Build dist/ on the current branch, then push it as a single commit
# onto the `gh-pages` branch. GitHub Pages is configured to serve from
# gh-pages in legacy mode (no Actions, no billing).
#
# Usage:
#   npm run deploy        # build + deploy
#   bash scripts/deploy.sh    # deploy only (assumes dist/ is fresh)

set -euo pipefail

ROOT=$(git rev-parse --show-toplevel)
cd "$ROOT"

if [[ ! -d dist ]]; then
  echo "✗ dist/ not found. Run \`npm run build\` first." >&2
  exit 1
fi

# Source commit info for the deploy commit message
SOURCE_SHA=$(git rev-parse --short HEAD)
SOURCE_MSG=$(git log -1 --pretty=%s)

# Make sure dist/ has the GitHub Pages essentials.
# The .nojekyll file disables Jekyll processing on Pages.
touch dist/.nojekyll

# CNAME is required for the custom domain — copy from public/ if Astro put it there,
# or fall back to the repo root.
if [[ -f public/CNAME ]]; then
  cp public/CNAME dist/
elif [[ -f CNAME ]]; then
  cp CNAME dist/
fi

WORKTREE_DIR=$(mktemp -d -t dm-deploy-XXXXXX)
trap 'rm -rf "$WORKTREE_DIR"' EXIT

# Add an orphan worktree on gh-pages (creates the branch if missing).
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git worktree add --force "$WORKTREE_DIR" gh-pages
else
  git worktree add --orphan -B gh-pages --force "$WORKTREE_DIR"
fi

# Wipe the worktree contents (preserve .git pointer file).
find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy the fresh build into the worktree.
cp -r dist/. "$WORKTREE_DIR/"

# Commit & push.
cd "$WORKTREE_DIR"
git add -A
if git diff --cached --quiet; then
  echo "→ nothing to deploy (gh-pages already up to date)"
else
  git -c user.email="deploy@doctor-mirzaev.ru" \
      -c user.name="Doctor Mirzaev Deploy" \
      commit -q -m "deploy: ${SOURCE_MSG} (${SOURCE_SHA})"
  git push -q origin gh-pages
  echo "✓ deployed gh-pages @ $(git rev-parse --short HEAD)"
fi

cd "$ROOT"
git worktree remove --force "$WORKTREE_DIR"
