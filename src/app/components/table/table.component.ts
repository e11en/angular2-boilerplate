import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @ViewChild('editBtnTpl') editBtnTpl: TemplateRef<any>;

    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane', id: 1 },
        { name: 'Dany', gender: 'Male', company: 'KFC', id: 2 },
        { name: 'Molly', gender: 'Female', company: 'Burger King', id: 3 },
    ];
    columns: any = [];

    selected: any = [];

    onSelect({ selected }: {selected: any}) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    ngOnInit() {
        // If one of the fields use a template then you need init the columns in the ngOnInit
        this.columns = [
            {
                width: 30,
                canAutoResize: false,
                resizeable: false,
                headerCheckboxable: true,
                checkboxable: true
            },
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' },
            { name: 'Id', cellTemplate: this.editBtnTpl }
        ];
    }

    sampleFunction(value: any) {
        alert('Id: ' + value);
    }
}
