include ../../build/modules.mk

MODULE = utils
FILENAME = ${MODULE}.js
RAWFILE = ${DEVELOPMENT_DIR}/${MODULE}.raw.js

SOURCE = ${SOURCE_DIR}/uid/source/jquery.uid.js \
	${SOURCE_DIR}/isDeferred/source/jquery.isdeferred.js \
	${SOURCE_DIR}/distinct/source/jquery.distinct.js \
	${SOURCE_DIR}/trimSeparators/source/jquery.trimseparators.js \
	${SOURCE_DIR}/number/source/jquery.number.js \
	${SOURCE_DIR}/stretchToFit/source/jquery.stretchToFit.js \
	${SOURCE_DIR}/toHTML/source/jquery.toHTML.js \

PRODUCTION = ${PRODUCTION_DIR}/${FILENAME}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${FILENAME}

all: raw module clean

module:
	${WRAP} ${RAWFILE} > ${DEVELOPMENT}
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}

raw:
	cat ${SOURCE} > ${RAWFILE}

clean:
	rm -fr ${RAWFILE}
