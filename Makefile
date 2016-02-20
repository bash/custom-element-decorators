#
# (c) 2016 Ruben Schmidmeister <ruby@fog.im>
#
SHELL := /bin/bash
PATH  := ./node_modules/.bin:$(PATH)

JS_FILES := $(shell find . -name "*.es6")

index.js: $(JS_FILES)
	browserify -t babelify index.es6 -o index.js