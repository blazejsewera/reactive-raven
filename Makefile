all: install

build: build-ui

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

build-ui:
	@cd ./ui; \
	yarn build
