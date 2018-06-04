import {Component} from '@angular/core'
import _ from 'lodash'
import moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor () {
        console.log('lodash version:', _.VERSION);
        console.log('moment', moment)
    }

}