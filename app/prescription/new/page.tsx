"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  from: string;
  to: string;
  beforeBreakfast: boolean;
  beforeLunch: boolean;
  beforeDinner: boolean;
  afterBreakfast: boolean;
  afterLunch: boolean;
  afterDinner: boolean;
}

export default function NewPrescriptionPage() {
  const router = useRouter();
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "",
      dosage: "",
      frequency: "",
      from: "",
      to: "",
      beforeBreakfast: false,
      beforeLunch: false,
      beforeDinner: false,
      afterBreakfast: false,
      afterLunch: false,
      afterDinner: false,
    },
  ]);

  const addMedication = () => {
    const newMedication: Medication = {
      id: Date.now().toString(),
      name: "",
      dosage: "",
      frequency: "",
      from: "",
      to: "",
      beforeBreakfast: false,
      beforeLunch: false,
      beforeDinner: false,
      afterBreakfast: false,
      afterLunch: false,
      afterDinner: false,
    };
    setMedications([...medications, newMedication]);
  };

  const removeMedication = (id: string) => {
    if (medications.length > 1) {
      setMedications(medications.filter(med => med.id !== id));
    }
  };

  const updateMedication = (id: string, field: keyof Medication, value: any) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const handleSave = () => {
    console.log("Prescription saved:", medications);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-100/50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        {/* Header with Pills Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              {/* Pills Icon Container */}
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center relative">
                {/* Main pill - white with blue cap */}
                <div className="relative">
                  <div className="w-12 h-6 bg-white rounded-full border-2 border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-6 h-full bg-blue-500 rounded-l-full"></div>
                  </div>
                  {/* Second pill - purple */}
                  <div className="absolute -top-1 -right-2 w-8 h-4 bg-purple-500 rounded-full transform rotate-12"></div>
                  {/* Third pill - blue */}
                  <div className="absolute -bottom-1 -left-1 w-6 h-3 bg-blue-400 rounded-full transform -rotate-12"></div>
                </div>
                {/* Plus icon */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-pink-500">New prescription</h1>
        </div>

        {/* Medications List */}
        <div className="space-y-8 max-h-96 overflow-y-auto">
          {medications.map((medication, index) => (
            <div key={medication.id} className="space-y-4">
              {/* Medication Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {index > 0 && (
                    <Trash2 className="w-4 h-4 text-pink-500" />
                  )}
                  <h3 className="text-blue-500 font-medium text-sm">
                    Medicament #{index + 1}
                  </h3>
                </div>
                {index > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMedication(medication.id)}
                    className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 h-8 w-8 p-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* First Row: Name, Dosage, Frequency */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-blue-500 mb-2 font-medium">
                    Medicament #{index + 1}
                  </label>
                  <Input
                    placeholder="Medicament name"
                    value={medication.name}
                    onChange={(e) => updateMedication(medication.id, 'name', e.target.value)}
                    className="h-10 border-gray-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-500 mb-2 font-medium">
                    Dosage
                  </label>
                  <Select
                    value={medication.dosage}
                    onValueChange={(value) => updateMedication(medication.id, 'dosage', value)}
                  >
                    <SelectTrigger className="h-10 border-gray-200 rounded-lg text-sm">
                      <SelectValue placeholder="Dosage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1mg">1mg</SelectItem>
                      <SelectItem value="5mg">5mg</SelectItem>
                      <SelectItem value="10mg">10mg</SelectItem>
                      <SelectItem value="25mg">25mg</SelectItem>
                      <SelectItem value="50mg">50mg</SelectItem>
                      <SelectItem value="100mg">100mg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs text-blue-500 mb-2 font-medium">
                    Frequency
                  </label>
                  <Select
                    value={medication.frequency}
                    onValueChange={(value) => updateMedication(medication.id, 'frequency', value)}
                  >
                    <SelectTrigger className="h-10 border-gray-200 rounded-lg text-sm">
                      <SelectValue placeholder="Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once-daily">Once daily</SelectItem>
                      <SelectItem value="twice-daily">Twice daily</SelectItem>
                      <SelectItem value="three-times">Three times daily</SelectItem>
                      <SelectItem value="as-needed">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Second Row: From and To dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-blue-500 mb-2 font-medium">
                    From
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="DD/MM/YYYY"
                      value={medication.from}
                      onChange={(e) => updateMedication(medication.id, 'from', e.target.value)}
                      className="h-10 border-gray-200 rounded-lg pl-10 text-sm"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-blue-500 mb-2 font-medium">
                    To
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="DD/MM/YYYY"
                      value={medication.to}
                      onChange={(e) => updateMedication(medication.id, 'to', e.target.value)}
                      className="h-10 border-gray-200 rounded-lg pl-10 text-sm"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Timing Buttons */}
              <div className="space-y-3">
                {/* Before meals row */}
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    type="button"
                    variant={medication.beforeBreakfast ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'beforeBreakfast', !medication.beforeBreakfast)}
                    className={`h-10 rounded-full text-sm ${
                      medication.beforeBreakfast 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    Before Breakfast
                  </Button>
                  <Button
                    type="button"
                    variant={medication.beforeLunch ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'beforeLunch', !medication.beforeLunch)}
                    className={`h-10 rounded-full text-sm ${
                      medication.beforeLunch 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    Before Lunch
                  </Button>
                  <Button
                    type="button"
                    variant={medication.beforeDinner ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'beforeDinner', !medication.beforeDinner)}
                    className={`h-10 rounded-full text-sm ${
                      medication.beforeDinner 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    Before Dinner
                  </Button>
                </div>

                {/* After meals row */}
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    type="button"
                    variant={medication.afterBreakfast ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'afterBreakfast', !medication.afterBreakfast)}
                    className={`h-10 rounded-full text-sm ${
                      medication.afterBreakfast 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    After Breakfast
                  </Button>
                  <Button
                    type="button"
                    variant={medication.afterLunch ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'afterLunch', !medication.afterLunch)}
                    className={`h-10 rounded-full text-sm ${
                      medication.afterLunch 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    After Lunch
                  </Button>
                  <Button
                    type="button"
                    variant={medication.afterDinner ? "default" : "outline"}
                    onClick={() => updateMedication(medication.id, 'afterDinner', !medication.afterDinner)}
                    className={`h-10 rounded-full text-sm ${
                      medication.afterDinner 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    After Dinner
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Medication Button */}
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={addMedication}
            className="border-dashed border-2 border-blue-300 text-blue-500 hover:bg-blue-50 rounded-full h-10 px-6 flex items-center space-x-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add a medicament</span>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="px-12 py-3 h-12 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            className="px-12 py-3 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}