import React from 'react'

const Dialog = () => {
  return (
    <div class="modal fade" tabindex="-1" role="dialog" id="eventModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-xs-12">
                            <label class="col-xs-4" for="edit-title">일정명</label>
                            <input class="inputModal" type="text" name="edit-title" id="edit-title"
                                required="required" />
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-xs-12">
                            <label class="col-xs-4" for="edit-type">구분</label>
                            <select class="inputModal" type="text" name="edit-type" id="edit-type">
                                <option value="카테고리1">카테고리1</option>
                                <option value="카테고리2">카테고리2</option>
                                <option value="카테고리3">카테고리3</option>
                                <option value="카테고리4">카테고리4</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <label class="col-xs-4" for="edit-color">색상</label>
                            <select class="inputModal" name="color" id="edit-color">
                                <option value="#D25565" style="color:#D25565;">빨간색</option>
                                <option value="#9775fa" style="color:#9775fa;">보라색</option>
                                <option value="#ffa94d" style="color:#ffa94d;">주황색</option>
                                <option value="#74c0fc" style="color:#74c0fc;">파란색</option>
                                <option value="#f06595" style="color:#f06595;">핑크색</option>
                                <option value="#63e6be" style="color:#63e6be;">연두색</option>
                                <option value="#a9e34b" style="color:#a9e34b;">초록색</option>
                                <option value="#4d638c" style="color:#4d638c;">남색</option>
                                <option value="#495057" style="color:#495057;">검정색</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <label class="col-xs-4" for="edit-desc">설명</label>
                            <textarea rows="4" cols="50" class="inputModal" name="edit-desc"
                                id="edit-desc"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer modalBtnContainer-addEvent">
                    <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
                    <button type="button" class="btn btn-primary" id="save-event">저장</button>
                </div>
                <div class="modal-footer modalBtnContainer-modifyEvent">
                    <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger" id="deleteEvent">삭제</button>
                    <button type="button" class="btn btn-primary" id="updateEvent">저장</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dialog