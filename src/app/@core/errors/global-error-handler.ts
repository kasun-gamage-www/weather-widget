import { ErrorHandler, Injectable, NgZone } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private _snackbar: MatSnackBar, private zone: NgZone) { }

    handleError(error: Error): void {
        this._snackbar.open('Something went wrong. Contact Allion Technologies.', 'Okay', {
            horizontalPosition: 'center',
            verticalPosition: 'top'
        })

        this.zone.run(() => {
            this._snackbar.open('Something went wrong', error.message, {
                horizontalPosition: 'center',
                verticalPosition: 'top'
            })
        })
    }
}