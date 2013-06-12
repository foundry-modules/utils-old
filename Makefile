all: join wrap-core minify

include ../../build/modules.mk

MODULE = utils

SOURCE_FILES = ${SOURCE_DIR}/IE/source/jquery.IE.js \
	${SOURCE_DIR}/uid/source/jquery.uid.js \
	${SOURCE_DIR}/isDeferred/source/jquery.isdeferred.js \
	${SOURCE_DIR}/distinct/source/jquery.distinct.js \
	${SOURCE_DIR}/trimSeparators/source/jquery.trimseparators.js \
	${SOURCE_DIR}/number/source/jquery.number.js \
	${SOURCE_DIR}/stretchToFit/source/jquery.stretchToFit.js \
	${SOURCE_DIR}/serializeJSON/source/jquery.fn.serializejson.js \
	${SOURCE_DIR}/toHTML/source/jquery.toHTML.js \
	${SOURCE_DIR}/bloop/source/jquery.Bloop.js \
	${SOURCE_DIR}/remap/source/jquery.remap.js \
	${SOURCE_DIR}/deletes/source/jquery.deletes.js \
	${SOURCE_DIR}/threads/source/jquery.Threads.js \
	${SOURCE_DIR}/enqueue/source/jquery.Enqueue.js \
	${SOURCE_DIR}/eventable/source/jquery.eventable.js \
	${SOURCE_DIR}/chunk/source/jquery.Chunk.js \
	${SOURCE_DIR}/disabled/source/jquery.disabled.js \
	${SOURCE_DIR}/throttledAjax/source/jquery.throttledAjax.js \
	${SOURCE_DIR}/callback/source/jquery.callback.js