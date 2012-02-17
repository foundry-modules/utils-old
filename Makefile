SRC_DIR = source
BUILD_DIR = build
FOUNDRY_DIR = ../..
PRODUCTION_DIR = ${FOUNDRY_DIR}/scripts
DEVELOPMENT_DIR = ${FOUNDRY_DIR}/scripts_
UGLIFY = uglifyjs --unsafe -nc

BASE_FILES = ${SRC_DIR}/uid/source/jquery.uid.js \
	${SRC_DIR}/isDeferred/source/jquery.isdeferred.js \
	${SRC_DIR}/distinct/source/jquery.distinct.js \
	${SRC_DIR}/trimSeparators/source/jquery.trimseparators.js \
	${SRC_DIR}/number/source/jquery.number.js


all: premake body min foundry

premake:
	mkdir -p ${BUILD_DIR}

body:
	@@cat ${BASE_FILES} > ${BUILD_DIR}/jquery.utils.js

min:
	${UGLIFY} ${BUILD_DIR}/jquery.utils.js > ${BUILD_DIR}/jquery.utils.min.js

foundry:
	cat ${FOUNDRY_DIR}/build/foundry_intro.js \
		${BUILD_DIR}/jquery.utils.js \
		${FOUNDRY_DIR}/build/foundry_outro.js \
		> ${DEVELOPMENT_DIR}/utils.js

	${UGLIFY} ${DEVELOPMENT_DIR}/utils.js > ${PRODUCTION_DIR}/utils.js
