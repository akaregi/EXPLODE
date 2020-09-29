.PHONY: run
run:
	deno run --importmap=import_map.json --unstable ./src/${n}.ts