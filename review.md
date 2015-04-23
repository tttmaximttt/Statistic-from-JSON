#2015.01.16

##overall
* put `;` to the end of commands

##tests/messagesSpec.js
* :70 remove console.log
* :75 not descriptive error messages
* :128 this wont work (test declaration inside of beforeEach block)
```js
beforeEach('generate som variables', function(){
					messagesInstance = messages;

            it('should throw an error on undefined data', function(done){
                var defer = Q.defer(),
                    providerStub = sinon.stub(provider, 'getData').returns(defer.promise);
				defer.resolve(undefined);

				messagesInstance.getData().then(function(data){
					done('Invalid result of #getData');
				}, function(){
					done();
				});
					provider.getData.restore();
				})
		})
```
* :145 this test should be done with the help of `expect`
* :155 this test should be done with the help of `expect`
* :165 duplicate test
* :169 duplicate test

##tests/roomSpec.js
:83 improve your code style. this 
```js
var ourObj = [{id: 'c0dc91a6-asdf-4802-9c01-a5c97b68e55a',
    users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
    messageCount: 1},{
    id: 'c0dc91a6-d0c8-4802-9c01-a5c97b68e55a',
    users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
    messageCount: 1}
];
```
should looks like
```js
var ourObj = [{
    id: 'c0dc91a6-asdf-4802-9c01-a5c97b68e55a',
    users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
    messageCount: 1
}, {
    id: 'c0dc91a6-d0c8-4802-9c01-a5c97b68e55a',
    users: ['844eeaf2-b0a7-49ff-8c91-62146edb09c1'],
    messageCount: 1
}];
```

* :94 not descriptive error messages
* :107 this tests dont need beforeEach, afterEach
* :117 this test should be done with the help of `expect`
* :127 this test should be done with the help of `expect`

##tests/userSpec.js

* :69 this

```js
var ourObj = {
    id: '844eeaf2-b0a7-49ff-8c91-62146edb09c1',
    rooms: ['c0dc91a6-d0c8-4802-9c01-a5c97b68e55a'],
    messagesCount: 1};
```
should looks like

```js
var ourObj = {
    id: '844eeaf2-b0a7-49ff-8c91-62146edb09c1',
    rooms: ['c0dc91a6-d0c8-4802-9c01-a5c97b68e55a'],
    messagesCount: 1
};
```
* :78 not descriptive error messages
* :115 this tests dont need beforeEach, afterEach
* :125 this test should be done with the help of `expect`
* :135 this test should be done with the help of `expect`