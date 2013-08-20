all: join-script-files wrap-script minify-script

include ../../build/modules.mk

MODULE = utils

SOURCE_SCRIPT_FILES = ${SOURCE_SCRIPT_FOLDER}/IE/source/jquery.IE.js \
	${SOURCE_SCRIPT_FOLDER}/uid/source/jquery.uid.js \
	${SOURCE_SCRIPT_FOLDER}/isDeferred/source/jquery.isdeferred.js \
	${SOURCE_SCRIPT_FOLDER}/distinct/source/jquery.distinct.js \
	${SOURCE_SCRIPT_FOLDER}/trimSeparators/source/jquery.trimseparators.js \
	${SOURCE_SCRIPT_FOLDER}/number/source/jquery.number.js \
	${SOURCE_SCRIPT_FOLDER}/stretchToFit/source/jquery.stretchToFit.js \
	${SOURCE_SCRIPT_FOLDER}/serializeJSON/source/jquery.fn.serializejson.js \
	${SOURCE_SCRIPT_FOLDER}/toHTML/source/jquery.toHTML.js \
	${SOURCE_SCRIPT_FOLDER}/bloop/source/jquery.Bloop.js \
	${SOURCE_SCRIPT_FOLDER}/remap/source/jquery.remap.js \
	${SOURCE_SCRIPT_FOLDER}/deletes/source/jquery.deletes.js \
	${SOURCE_SCRIPT_FOLDER}/threads/source/jquery.Threads.js \
	${SOURCE_SCRIPT_FOLDER}/enqueue/source/jquery.Enqueue.js \
	${SOURCE_SCRIPT_FOLDER}/eventable/source/jquery.eventable.js \
	${SOURCE_SCRIPT_FOLDER}/chunk/source/jquery.Chunk.js \
	${SOURCE_SCRIPT_FOLDER}/disabled/source/jquery.disabled.js \
	${SOURCE_SCRIPT_FOLDER}/throttledAjax/source/jquery.throttledAjax.js \
	${SOURCE_SCRIPT_FOLDER}/callback/source/jquery.callback.js\
	${SOURCE_SCRIPT_FOLDER}/visible/source/jquery.visible.js \
	${SOURCE_SCRIPT_FOLDER}/classes/source/jquery.classes.js \
	${SOURCE_SCRIPT_FOLDER}/buildHTML/source/jquery.buildHTML.js \
	${SOURCE_SCRIPT_FOLDER}/filterBy/source/jquery.filterBy.js \
	${SOURCE_SCRIPT_FOLDER}/intersects/source/jquery.intersects.js \
	${SOURCE_SCRIPT_FOLDER}/download/source/jquery.download.js