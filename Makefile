@PHONY: all
all: clean install build copy-dist

run:
	@cd dist; \
	./rr

copy-dist: clean-dist build
	mkdir -p ./dist
	cp -r ./ui/dist ./dist/ui
	cp ./core/rr ./dist/rr

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

install: install-core install-ui

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

build-core:
	@cd ./core; \
	$(MAKE) build

build-ui:
	@cd ./ui; \
	yarn build
