import { tenantsList } from "@/mock/tenant.mock";
import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const tenant = tenantsList[Math.floor(Math.random() * tenantsList.length)];
  return NextResponse.json({ tenant });
}
