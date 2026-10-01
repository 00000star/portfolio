#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

# 1. Prepare esbuild in /tmp (exec-capable)
if [ -f "node_modules/@esbuild/linux-arm64/bin/esbuild" ]; then
    cp -f "node_modules/@esbuild/linux-arm64/bin/esbuild" /tmp/esbuild
    chmod +x /tmp/esbuild 2>/dev/null || true
fi

# 2. Prepare native rollup binary in /tmp (exec / dlopen-capable)
mkdir -p /tmp/node_modules/@rollup
if [ -d "node_modules/@rollup/rollup-linux-arm64-gnu" ]; then
    cp -rf "node_modules/@rollup/rollup-linux-arm64-gnu" /tmp/node_modules/@rollup/
    rm -rf "node_modules/@rollup/rollup-linux-arm64-gnu"
fi

export ESBUILD_BINARY_PATH=/tmp/esbuild
export NODE_PATH=/tmp/node_modules

# 3. Compile TypeScript & build Vite bundle
echo "==> Validating TypeScript types..."
node node_modules/typescript/bin/tsc

echo "==> Building production assets with Vite..."
node node_modules/vite/bin/vite.js build

echo "==> Production build completed successfully in $DIR/dist"
