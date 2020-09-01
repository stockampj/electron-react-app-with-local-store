const Store = require('electron-store');

class DataStore extends Store {
  constructor (settings) {
    super(settings);
    this.idCount = this.get('idCount')|| 1000;
    this.itemList = this.get('itemList') || [];
  };
  
  getItems() {
    this.itemList = this.get('itemList') || [];
    return this.itemList;
  }

  addItem(item){
    this.idCount ++;
    this.set('idCount', this.idCount);
    item.id = `itemID-${this.idCount}`
    const agentObject = {
      [item.id]: item
    }
    this.itemList = [...this.itemList, item];
    this.set('itemList', this.itemList);
  }
  
  deleteItem(id){
    this.itemList = this.itemList.filter(item => item.id !== id);
    this.set('itemList', this.itemList);
  }

  saveItems(){
    this.set('itemList', this.itemList);
  }

};

module.exports = DataStore;