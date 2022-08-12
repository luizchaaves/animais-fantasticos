import outsideClick from './outsideclick.js'

export default class DropdownMenu{
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // define touchstart e clique como argumento padrão de events caso o usuário não define
    if(events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdowMenu = this.activeDropdowMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropdowMenu(event){
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu 
  addDropdowMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdowMenu);
      })
    })
  }

  init(){
    if(this.dropdownMenus.length){
      this.addDropdowMenusEvent();
    }
    return this;
  }

}