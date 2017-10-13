// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../modules/core/index';
import { IAppState, getProducts } from '../../modules/ngrx/index';
import { NameList } from '../../modules/sample/index';

@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'amazon.component.html',
    styleUrls: ['amazon.component.css']
})
export class AmazonComponent implements OnInit {
    public products$: Observable<any>;

    constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

    ngOnInit() {
        this.products$ = this.store.let(getProducts);
    }

    /*
     * @param newname  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
    search(): boolean {
        // this.store.dispatch(new NameList.AddAction(this.newName));
        return false;
    }

    readAbout() {
        // Try this in the {N} app
        // {N} can use these animation options
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    }
}
