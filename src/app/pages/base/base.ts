export interface Base {
    id: number;
    Name: string;
    Username: string;
    Cpf: string;
    Password: string;
    // Imagem como arquivo do <input> elemento
    Image: File; 

    // URL para imagem
    // Image: string;

    // Imagem usada como <img> elemento
    // Image: HTMLImageElement;
}