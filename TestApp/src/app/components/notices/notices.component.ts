import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.styl']
})
export class NoticesComponent implements OnInit {
  notesHtml = [];
  currentUser: string;
  currentId: string;
  submitted = false;

  constructor(private currentNoticeService: NoticesService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.getNotices();
  }

  getNotices() {
    this.currentNoticeService.getCurrentNotice(JSON.parse(this.currentUser)[0]._id)
      .subscribe(result => {
        this.notesHtml = result;
      }, error => {
        console.log('getCurrentNotice: ', error);
      });
  }

  addNoticesList(notice) {
    this.notesHtml.push(notice);
  }

  deleteNoticesList(data) {
    this.currentNoticeService.deleteNoticeService(data.id)
      .subscribe(result => {
        this.notesHtml.splice(data.index, 1);
      }, error => {
        this.notesHtml = error;
        console.log('deleteNotice: ', error);
      });
  }

  editNoticeList(data) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;

    this.currentNoticeService.editNoticeService(this.currentId, data)
      .subscribe(result => {

        const index = this.notesHtml.findIndex(item => item._id === data._id);
        this.notesHtml[index] = data;

      }, error => {
        console.log(error);
      })
  }
}
