import { TestBed, async } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormComponent
            ],
            imports: [ CoreModule ]
        }).compileComponents();
    }));

    it('should create the example component', async(() => {
        const fixture = TestBed.createComponent(FormComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
