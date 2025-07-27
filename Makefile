format:
	pnpm format
	cargo ws exec -- cargo fmt --verbose

clean:
	cargo ws exec -- cargo clean
	