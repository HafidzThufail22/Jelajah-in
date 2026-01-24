import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { User, Mail, Phone, Calendar, Users, MapPin } from "lucide-react";
import { SuccessAlert } from "@/components/ui/success-alert";

const paketList = [
  { id: "raja-ampat", nama: "Raja Ampat Explorer", harga: 8500000 },
  { id: "bromo", nama: "Bromo Sunrise Adventure", harga: 2500000 },
  { id: "borobudur", nama: "Borobudur Heritage Tour", harga: 1800000 },
  { id: "bali", nama: "Bali Paradise Escape", harga: 4500000 },
  { id: "komodo", nama: "Komodo Island Expedition", harga: 7200000 },
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    paket: "",
    tanggal: "",
    jumlahOrang: "",
    catatan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    console.log("Data Pemesanan:", formData);

    // Di sini Anda bisa mengirim ke API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      paket: "",
      tanggal: "",
      jumlahOrang: "",
      catatan: "",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Pesan Paket Jelajah
        </CardTitle>
        <CardDescription>
          Isi formulir di bawah untuk memesan paket perjalanan impian Anda
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Lengkap */}
          <div className="space-y-2">
            <Label htmlFor="nama" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nama Lengkap
            </Label>
            <Input
              id="nama"
              type="text"
              placeholder="Masukkan nama lengkap"
              value={formData.nama}
              onChange={(e) => handleChange("nama", e.target.value)}
              required
            />
          </div>

          {/* Email & Telepon (Grid 2 kolom) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telepon" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                No. Telepon
              </Label>
              <Input
                id="telepon"
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={formData.telepon}
                onChange={(e) => handleChange("telepon", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Pilih Paket */}
          <div className="space-y-2">
            <Label htmlFor="paket" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pilih Paket
            </Label>
            <Select
              value={formData.paket}
              onValueChange={(value) => handleChange("paket", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih paket perjalanan" />
              </SelectTrigger>
              <SelectContent>
                {paketList.map((paket) => (
                  <SelectItem key={paket.id} value={paket.id}>
                    {paket.nama} - Rp {paket.harga.toLocaleString("id-ID")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tanggal & Jumlah Orang */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tanggal" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Tanggal Keberangkatan
              </Label>
              <Input
                id="tanggal"
                type="date"
                value={formData.tanggal}
                onChange={(e) => handleChange("tanggal", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jumlahOrang" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Jumlah Orang
              </Label>
              <Select
                value={formData.jumlahOrang}
                onValueChange={(value) => handleChange("jumlahOrang", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jumlah" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Orang
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Catatan Tambahan */}
          <div className="space-y-2">
            <Label htmlFor="catatan">Catatan Tambahan (Opsional)</Label>
            <Textarea
              id="catatan"
              placeholder="Permintaan khusus, alergi makanan, dll..."
              value={formData.catatan}
              onChange={(e) => handleChange("catatan", e.target.value)}
              rows={4}
            />
          </div>

          {/* Tombol Submit */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengirim..." : "Kirim Pemesanan"}
          </Button>
        </form>
      </CardContent>

      {/* Success Alert Modal */}
      <SuccessAlert
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Berhasil!"
        message="Pemesanan paket jelajah Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda."
        buttonText="LANJUTKAN"
      />
    </Card>
  );
}
