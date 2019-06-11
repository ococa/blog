/**
 * promise and generator 实现 async/await
 */

function async(generator) {
    let iterator = generator();

    function handle(iteratorResult) {
        if (iteratorResult.done) { return ;}

        const iteratorValue = iteratorResult.value;

        if(iteratorValue instanceof Promise) {
            iteratorValue.then(res => {
                handle(iterator.next(res));
            }).catch(err => { iterator.throw(err) });
        }
    }
    try {
        handle(iterator.next());
    } catch (e) {
        iterator.throw(e);
    }
}