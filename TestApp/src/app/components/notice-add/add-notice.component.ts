import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NoticesService} from '../../services/notices.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.styl']
})
export class AddNoticeComponent implements OnInit {

  currentUser: string;
  currentId: string;
  submitted = false;

  @Output() onAddNotice = new EventEmitter<any>();

  constructor(private noticeService: NoticesService) { }

  ngOnInit() {}

  onSubmit(noticesAddForm: NgForm) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.submitted = true;

    this.noticeService.addNewNotice(this.currentId, noticesAddForm.value)
      .subscribe(result => {
        this.onAddNotice.emit(result);
        noticesAddForm.reset();
      }, error => {
        console.log('#noticesAddForm', error);
      });


  }

}
