import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NoticesService } from "../../services/notices.service";
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators }  from '@angular/forms';

@Component({
  selector: 'app-notices-viewport',
  templateUrl: './notices-viewport.component.html',
  styleUrls: ['./notices-viewport.component.styl']
})
export class NoticesViewportComponent implements OnInit {
  currentUser: string;
  currentId: string;
  submitted = false;
  noteEditStatus = false;
  selectedIndex: null;
  @Output() deleteNoticeEmitter: EventEmitter<any> = new EventEmitter();

  @Output() editNoticeEmitter = new EventEmitter();

  @Input() noticesItem;

  @Input() idx;


  constructor(private noticeService: NoticesService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
  }

  toggleEdit() {
    this.noteEditStatus = !this.noteEditStatus;
  }

  deleteEvent() {
    this.deleteNoticeEmitter.emit({id: this.noticesItem._id, index: this.idx});
  }

  onSubmit(noticesEditForm: NgForm) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser)[0]._id;
    this.submitted = true;

    this.editNoticeEmitter.emit(noticesEditForm.value);
  }



}
