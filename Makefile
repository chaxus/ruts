format:
	pnpm format
	cargo ws exec -- cargo fmt --verbose

clean:
	cargo ws exec -- cargo clean

install:
	pnpm install
	cargo ws exec -- cargo install cargo-workspaces

build\:counter:
	cd programs/counter && pnpm build

build\:bulls-and-cows:
	cd programs/bulls-and-cows/program && anchor build

deploy\:counter:
	cd programs/counter && pnpm deploy
