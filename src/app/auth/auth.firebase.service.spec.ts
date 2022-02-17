import { TestBed } from '@angular/core/testing'

import { FirebaseAuthService } from './auth.firebase.service'

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { UiService } from '../common/ui.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { autoSpyObj } from 'angular-unit-test-helper'
TestBed.configureTestingModule({
  imports: [HttpClientTestingModule],
  providers: [
    FirebaseAuthService,
    { provide: UiService, useValue: autoSpyObj(UiService) },
    { provide: AngularFireAuth, useValue: autoSpyObj(AngularFireAuth) },
  ],
})
describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FirebaseAuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
