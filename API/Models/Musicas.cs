using System;


namespace API.Models
{
    public class Musicas
    {
        //Construtor
        public Musicas() => CriadoEm = DateTime.Now;

        //Atributos
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Duracao { get; set; }
        public string Cantor { get; set; }
        public string Compositor { get; set; }
        public string Estilo { get; set; }
        public DateTime CriadoEm { get; set; }

        //ToString

        public override string ToString() =>
            $"Nome: {Nome} | Duracao: {Duracao:C2} | Cantor: {Cantor} | Compositor: {Compositor} | Estilo: {Estilo} | Criado em: {CriadoEm}";
    }
}