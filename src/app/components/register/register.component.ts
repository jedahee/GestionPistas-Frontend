import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChildren('input') inputRef: QueryList<any> = <any>{};
  @ViewChildren('errorMsg') errorMsgRef: QueryList<any> = <any>{};

  public user: User = <User>{};

  constructor(private rute: Router, private userService: UserService) { }

  activeAnimationInput() {
    this.inputRef.forEach(input => {
      if (input.nativeElement.value.length > 0)
        input.nativeElement.classList.add("active-input");
      else
        input.nativeElement.classList.remove("active-input");
    });
  }

  ngAfterViewInit(): void {
    this.activeAnimationInput();
  }

  onSubmit(user: User): void {
    this.userService.register(user.nombre, user.apellidos, user.email, user.password).subscribe(datos => {
      this.rute.navigate(['/']);
    }, (error) => {
      this.errorMsgRef.forEach(errorMsg => {
        errorMsg.nativeElement.innerHTML = error.error.msg;

        errorMsg.nativeElement.classList.add('popup-transition');
        setTimeout(() => {
          errorMsg.nativeElement.classList.remove('popup-transition');
        }, 2500);
        
      });
      
    });
  }
}
