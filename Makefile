include ../../build/modules.mk

MODULE = utils
FILENAME = ${MODULE}.js
RAWFILE = ${DEVELOPMENT_DIR}/${MODULE}.raw.js

SOURCE = ${SOURCE_DIR}/IE/source/jquery.IE.js \
	${SOURCE_DIR}/uid/source/jquery.uid.js \
	${SOURCE_DIR}/isDeferred/source/jquery.isdeferred.js \
	${SOURCE_DIR}/distinct/source/jquery.distinct.js \
	${SOURCE_DIR}/trimSeparators/source/jquery.trimseparators.js \
	${SOURCE_DIR}/number/source/jquery.number.js \
	${SOURCE_DIR}/stretchToFit/source/jquery.stretchToFit.js \
	${SOURCE_DIR}/toHTML/source/jquery.toHTML.js \
	${SOURCE_DIR}/bloop/source/jquery.Bloop.js \
	${SOURCE_DIR}/remap/source/jquery.remap.js \
	${SOURCE_DIR}/deletes/source/jquery.deletes.js \
	${SOURCE_DIR}/threads/source/jquery.Threads.js \
	${SOURCE_DIR}/enqueue/source/jquery.Enqueue.js \
	${SOURCE_DIR}/eventable/source/jquery.eventable.js \
	${SOURCE_DIR}/chunk/source/jquery.Chunk.js \
	${SOURCE_DIR}/disabled/source/jquery.disabled.js \
	${SOURCE_DIR}/throttledAjax/source/jquery.throttledAjax.js

PRODUCTION = ${PRODUCTION_DIR}/${FILENAME}
DEVELOPMENT = ${DEVELOPMENT_DIR}/${FILENAME}

all: raw module clean

module:
	${WRAP} -c ${RAWFILE} > ${DEVELOPMENT}
	${UGLIFYJS} ${DEVELOPMENT} > ${PRODUCTION}

raw:
	cat ${SOURCE} > ${RAWFILE}

clean:
	rm -fr ${RAWFILE}
