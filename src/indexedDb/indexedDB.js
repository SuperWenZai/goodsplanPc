// indexedDB.js，浏览器本地数据库操作
export default {
    // indexedDB兼容
    indexedDB: window.indexedDB || window.webkitindexedDB || window.msIndexedDB || mozIndexedDB,
    // 新对象储存空间newStore参数：newStore.name、newStore.key
    // 新增对象存储空间要更改数据库版本
    /**
    * [openDB 打开数据库]
    * param  {String}     dbname   [数据库名称]
    * param  {Number}     version  [版本号]
    * param  {object}     newStore [版本号变更建立新的储存空间]
    * param  {Function}   callback [链接成功回调]
    */
    openDB: function (dbname, version, newStore, callback) {
        var version = version || 1;
        var request = this.indexedDB.open(dbname, version);
        request.onerror = function (event) {
            console.log('IndexedDB数据库打开错误');
        };
        request.onsuccess = function (event) {
            var db = event.target.result;
            if (callback && (typeof callback === 'function')) {
                callback(db);
            }
        };
        // onupgradeneeded，调用创建新的储存空间
        request.onupgradeneeded = function (event) {
            var db = event.target.result;
            if (newStore) {
                if (!db.objectStoreNames.contains(newStore.name)) {
                    db.createObjectStore(newStore.name, {
                        keyPath: newStore.key,
                        // autoIncrement: true
                    });
                }
            }
        };
    },
    /**
    * [deleteDB 删除数据库]
    * param  {String}     dbname   [数据库名称]
    * param  {Function}   callback [删除成功回调]
    */
    deleteDB: function (dbname, callback) {
        var deleteQuest = this.indexedDB.deleteDatabase(dbname);
        deleteQuest.onerror = function () {
            console.log('删除数据库出错');
        };
        deleteQuest.onsuccess = function () {
            if (callback && (typeof callback === 'function')) {
                callback();
            }
        }
    },
    /**
    * [closeDB 关闭数据库]
    * param  {String}     dbname   [数据库名称]
    */
    closeDB: function (dbname) {
        dbname.close();
        console.log('数据库已关闭');
    },
    /**
    * [addData 新增数据值]（与put的区别在于遇到键值相同的对象会返回错误，put则会重写对象）
    * param  {Object}     db        [数据库对象（打开数据库成功的返回值）]
    * param  {String}     storename [表名]
    * param  {Arr}        dataArr   [数据]
    * param  {Function}   callback  [更新成功回调]
    */
    addData: function (db, storename, dataArr, callback) {
        console.log('test');
        var store = db.transaction(storename, 'readwrite').objectStore(storename),
            request;
        for (var i = 0, len = dataArr.length; i < len; i++) {
            request = store.add(dataArr[i]);
            request.onerror = function () {
                console.error('ADD添加数据报错');
            };
            request.onsuccess = function () {
                if (callback && (typeof callback === 'function')) {
                    callback();
                }
            };
        }
    },
    /**
    * [putData 更新数据值]
    * param  {Object}     db        [数据库对象（打开数据库成功的返回值）]
    * param  {String}     storename [表名]
    * param  {Arr}        dataArr   [数据]
    * param  {Function}   callback  [更新成功回调]
    */
    putData: function (db, storename, dataArr, callback) {
        var store = db.transaction(storename, 'readwrite').objectStore(storename),
            request;
        for (var i = 0, len = dataArr.length; i < len; i++) {
            request = store.put(dataArr[i]);
            request.onerror = function () {
                console.error('PUT添加数据报错');
            };
            request.onsuccess = function () {
                if (callback && (typeof callback === 'function')) {
                    callback();
                }
            };
        }
    },
    /**
    * [deleteData 删除数据]
    * param  {Object}     db        [数据库对象（打开数据库成功的返回值）]
    * param  {String}     storename [表名]
    * param  {String}     key       [主键]
    */
    deleteData: function (db, storename, key) {
        var store = db.transaction(storename, 'readwrite').objectStore(storename);
        store.delete(key);
    },
    /**
    * [clearData 清空数据]
    * param  {Object}     db        [数据库对象（打开数据库成功的返回值）]
    * param  {String}     storename [表名]
    * param  {String}     key       [主键]
    */
    clearData: function (db, storename) {
        var store = db.transaction(storename, 'readwrite').objectStore(storename);
        store.clear();
    },
    /**
    * [getData 通过key获取数据]
    * param  {Object}     db        [数据库对象（打开数据库成功的返回值）]
    * param  {String}     storename [表名]
    * param  {String}     key       [主键]
    * param  {Function}   callback  [获取成功回调]
    */
    getData: function (db, storename, key, callback) {
        var store = db.transaction(storename, 'readonly').objectStore(storename),
            request;
        request = store.get(key);
        request.onerror = function () {
            console.log('通过KEY获取数据报错');
        };
        request.onsuccess = function (event) {
            var result = event.target.result;
            if (callback && (typeof callback === 'function')) {
                // 将查询结果传入回调函数
                callback(result);
            }
        }
    },
}   