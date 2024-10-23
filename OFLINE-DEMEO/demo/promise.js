class MyPromise {
    constructor(executorFunction) {
      this.onResolve = this.onResolve.bind(this);
      this.onReject = this.onReject.bind(this);
      this.storedValue =undefined;
      this.state = 'pending'; 
      this.promiseChain = [];
      this.handleError = () => {};
  
      try {
        executorFunction(this.onResolve, this.onReject);
      } catch (error) {
        this.onReject(error);
      }
    }
  
    then(handleSuccess) {
      if (this.state === 'fulfilled') {
        handleSuccess(this.storedValue);
      } else {
        this.promiseChain.push(handleSuccess);
      }
      return this; 
    }
  
    catch(handleError) {
      if (this.state === 'rejected') {
        handleError(this.storedValue);
      } else {
        this.handleError = handleError;
      }
      return this; 
    }
  
    onResolve(value) {
      if (this.state !== 'pending') return;
  
      this.state = 'fulfilled';
      this.storedValue = value;
  
      try {
        this.promiseChain.forEach((nextFunction) => {
          this.storedValue = nextFunction(this.storedValue);
        });
      } catch (error) {
        this.onReject(error);
      }
    }
  
    onReject(error) {
      if (this.state !== 'pending') return;
  
      this.state = 'rejected';
      this.storedValue = error;
  
      if (this.handleError) {
        this.handleError(error);
      }
    }
  }
  
  const a = new MyPromise((resolve, reject) => {
setTimeout(()=>{
    resolve(100);
},1500);
  });
  
  a.then((value) => {
    console.log(value); 
    return `Next then chain ${value}`;
  }).then((newValue) => {
    console.log(newValue); // Should log "Next then chain 100"
});

  
