@PHONY: all
all: clean install build copy-dist

run-prod:
	@cd dist; \
	./rr -addr 0.0.0.0:8080

run:
	@cd dist; \
	./rr

copy-dist: clean-dist build
	mkdir -p ./dist
	cp -r ./ui/dist ./dist/ui
	cp ./core/rr ./dist/rr

nuke: clean
	rm -f ./ui/src/config/reactiveRaven.ts

clean: clean-dist
	rm -f ./core/rr

clean-dist:
	rm -rf ./dist
	rm -rf ./ui/dist

build: build-core build-ui

preview: dev-core preview-ui

dev: dev-core dev-ui

dev-core:
	@cd ./core; \
	$(MAKE) run

dev-ui:
	@cd ./ui; \
	yarn dev

preview-ui:
	@cd ./ui; \
	yarn preview

install: install-core install-ui copy-ui-example-config

install-core:
	@echo "> installing dependencies for core"
	@cd ./core; \
	go mod download; \
	go mod tidy
	@echo "> done"

install-ui:
	@echo "> installing dependencies for ui"
	@cd ./ui; \
	yarn install
	@echo "> done"

copy-ui-example-config:
	@echo "> copying example configuration for ui"
	@cd ./ui; \
	yarn copy-example-config
	@echo "> done"

build-core:
	@cd ./core; \
	$(MAKE) build

build-ui:
	@cd ./ui; \
	yarn build
