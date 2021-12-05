all: install

dev: dev-core dev-ui

dev-core:
	@cd ./core; \
	$(MAKE) run

dev-ui:
	@cd ./ui; \
	yarn dev

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
