ASSETS_DIR := assets/

assets: favicons

favicons:
	node_modules/cli-real-favicon/real-favicon.js generate $(ASSETS_DIR)/favicon/faviconDescription.json /tmp/faviconData.json static/favicons/
