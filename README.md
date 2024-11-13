# NotesApp

NotesApp, basit ve kullanıcı dostu bir not alma uygulamasıdır. Kullanıcılar, kısa notlar ekleyebilir, istedikleri renkte not alabilir, notları filtreleyebilir ve kolayca silebilir. Bu proje, React ile geliştirilmiştir.

Siteye [buradaki bağlantıdan](https://bucolic-vacherin-e62d24.netlify.app/) ulaşabilirsiniz

## Özellikler

- **Not Ekleme**: Kullanıcılar, metin alanına yazdıkları notları ekleyebilir.
- **Renk Seçimi**: Yeni bir not eklerken, notun arka plan rengi için bir renk seçilebilir.
- **Not Listesi**: Ekranda girilen notlar, seçilen renkte listelenir.
- **Filtreleme**: Notları, belirli bir anahtar kelimeye göre filtreleyebilmek için arama alanı mevcuttur.
- **Not Silme**: Sağ üst köşedeki çarpı (×) butonuna tıklayarak notları silebilirsiniz.

## Kurulum

1. Bu projeyi klonlayın:

   ```bash
   git clone https://github.com/kullanici-adiniz/notes-app.git
   ```

2. Proje dizinine gidin:

```bash
cd noteapp
```

3. Gerekli bağımlılıkları yükleyin:

```bash
npm install
```

4. Uygulamayı başlatın:

```bash
npm run dev
```

Uygulama, tarayıcınızda otomatik olarak `http://localhost:5173` adresinde açılacaktır.

## Kullanım

1. **Not Ekleme:** "Enter your note here..." alanına bir not yazın. Alt kısımdaki renk seçeneklerinden birini seçin. Ardından, ADD butonuna tıklayın.
2. **Filtreleme:** Ekranın üst kısmındaki arama çubuğuna, aramak istediğiniz notla ilgili bir anahtar kelime yazın.
3. **Not Silme:** Not kartının sağ üst köşesindeki çarpı (×) işaretine tıklayarak notu silebilirsiniz.

## Kullanılan Teknolojiler

- **React:** Uygulamanın yapısı ve bileşen tabanlı mimarisi için.
- **CSS:** Basit ve temiz bir arayüz tasarımı için.
