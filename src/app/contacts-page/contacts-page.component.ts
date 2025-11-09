import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listigsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listigsService.getListingById(id).subscribe((lsiting) => {
      this.listing = lsiting;
      this.message = `Hi I am interested in your ${this.listing.name.toLowerCase()}`;
    });
  }

  sendMessage() {
    alert('Message has been sent');
    this.router.navigateByUrl('/listings');
  }
}
