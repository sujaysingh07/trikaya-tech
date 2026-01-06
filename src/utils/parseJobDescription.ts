export function parseJobDescription(text: string): string {
  if (!text) return "";

  const lines = text
    .split("\n")
    .map((l) => l.replace(/\r/g, "").trim())
    .filter(Boolean);

  let html = "";
  let inList = false;

  for (const line of lines) {
    // ✅ Section headings
    if (
      /^(Job Overview|Key Responsibilities|Qualifications|Key Skills)/i.test(
        line,
      )
    ) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      html += `
        <h3 class="mt-8 mb-3 text-lg font-semibold">
          ${line}
        </h3>
      `;
      continue;
    }

    // ✅ Bullet points (•, , -, *)
    if (/^[•*-]\s*/.test(line)) {
      if (!inList) {
        html += `
          <ul class="mt-3 mb-6 list-disc pl-6 space-y-2">
        `;
        inList = true;
      }

      html += `
        <li>
          ${line.replace(/^[•*-]\s*/, "")}
        </li>
      `;
      continue;
    }

    // ✅ Key : Value rows
    if (/^[A-Za-z ]+\s*:\s*/.test(line)) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      const [key, ...rest] = line.split(":");

      html += `
        <p class="mb-2">
          <strong>${key.trim()}:</strong>
          ${rest.join(":").trim()}
        </p>
      `;
      continue;
    }

    // ✅ Normal paragraph
    if (inList) {
      html += "</ul>";
      inList = false;
    }

    html += `
      <p class="mb-3 leading-relaxed">
        ${line}
      </p>
    `;
  }

  if (inList) html += "</ul>";

  return html;
}
