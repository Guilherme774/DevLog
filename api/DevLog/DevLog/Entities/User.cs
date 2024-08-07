using System.ComponentModel.DataAnnotations;

namespace DevLog.Entities
{
    public class User
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
        public int followers { get; set; }
        public string biograph { get; set; }
    }
}
