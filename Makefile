dev: dev-core dev-ui

dev-core:
	cd ./core; \
	make run

dev-ui:
	cd ./ui; \
	yarn dev

