import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
    this.message = `Hi I am interested in your ${this.listing.name.toLowerCase()}`;
  }

  sendMessage() {
    alert('Message has been sent');
    this.router.navigateByUrl('/listings');
  }
}
