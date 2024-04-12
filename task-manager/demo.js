function f() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (err) {
      // ...
      if("can't handle the error") {
        // throw err;
      }
  
    } finally {
      alert('cleanup!')
    }
  }


try {
    f()
}catch(err){
    alert(err)
}
