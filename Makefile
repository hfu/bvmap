# Makefile for bvmap project

.PHONY: build
build:
	vite build --outDir docs

.PHONY: serve
serve:
	vite preview

.PHONY: dev
dev:
	vite

.PHONY: style
style:
	deno run --allow-read --allow-write generate.ts
