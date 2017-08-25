import { TestBed, async } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableComponent
            ],
            imports: [ CoreModule ]
        }).compileComponents();
    }));

    it('should create the example component', async(() => {
        const fixture = TestBed.createComponent(TableComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
