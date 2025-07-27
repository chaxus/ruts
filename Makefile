format:
	pnpm format
	cargo ws exec -- cargo fmt --verbose

clean:
	cargo ws exec -- cargo clean

install:
	pnpm install
	cargo ws exec -- cargo install cargo-workspaces
