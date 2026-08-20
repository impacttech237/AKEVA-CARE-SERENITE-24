"use client";

export async function adminFetch(url, options = {}) {
  const isFormData = options.body instanceof FormData;
  const res = await fetch(url, {
    ...options,
    headers: isFormData ? options.headers : { "Content-Type": "application/json", ...(options.headers || {}) },
  });

  if (res.status === 401) {
    window.location.href = "/admin/login";
    throw new Error("Session expirée.");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Une erreur est survenue.");
  }
  return data;
}
