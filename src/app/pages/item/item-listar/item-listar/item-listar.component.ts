import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item.model';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {

  itens$!: Observable<Item[]>;

  colunasTabela = ['id', 'nome'];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.listarItens();
  }

  listarItens(){
    this.itens$ = this.itemService.listar();
  }
}
