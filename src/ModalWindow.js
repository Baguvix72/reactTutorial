import React, {Component} from 'react';
import service from './DataService';
import CheckItem from './ModalCheckItem';

function ModalWindow() {
  const list = []
  service.forEach(element => {
    list.push(<CheckItem name={element.name} />);
  });
  return (
    <div className="ModalWindow">
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Заявка на обратный звонок:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
                <div class="form-group">
                  <label for="BIO">ФИО:</label>
                  <input type="text" class="form-control" id="BIO" placeholder="Иванов Иван Иванович"/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Телефон:</label>
                  <input type="text" class="form-control" id="BIO" placeholder="+7(800) 555-35-35"/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect2">Выберите интерисующие Вас сервисы:</label>
                  <div class="form-check">
                    {list}
                  </div>
                </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Отправить</button>
            </div>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default ModalWindow;