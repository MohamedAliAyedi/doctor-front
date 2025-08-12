"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Plus, Trash2 } from "lucide-react";

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

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (medications: Medication[]) => void;
}

export function PrescriptionModal({ isOpen, onClose, onSave }: PrescriptionModalProps) {
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
    onSave(medications);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-white rounded-3xl">
        <div className="p-8">
          {/* Header with Icon */}
          <DialogHeader className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Pills Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="relative">
                    {/* Main pill */}
                    <div className="w-8 h-4 bg-blue-500 rounded-full transform rotate-45"></div>
                    {/* Second pill */}
                    <div className="absolute -top-1 -right-1 w-6 h-3 bg-purple-400 rounded-full transform -rotate-12"></div>
                    {/* Third pill */}
                    <div className="absolute -bottom-1 -left-1 w-5 h-3 bg-white border-2 border-blue-300 rounded-full transform rotate-12"></div>
                    {/* Plus icon */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <Plus className="w-2 h-2 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-pink-500">New prescription</h2>
          </DialogHeader>

          {/* Medications List */}
          <div className="space-y-8">
            {medications.map((medication, index) => (
              <div key={medication.id} className="space-y-6">
                {/* Medication Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {index > 0 && (
                      <Trash2 className="w-4 h-4 text-pink-500" />
                    )}
                    <h3 className="text-blue-500 font-medium">
                      Medicament #{index + 1}
                    </h3>
                  </div>
                  {index > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMedication(medication.id)}
                      className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* First Row: Name, Dosage, Frequency */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-blue-500 mb-2">
                      Medicament #1
                    </label>
                    <Input
                      placeholder="Medicament name"
                      value={medication.name}
                      onChange={(e) => updateMedication(medication.id, 'name', e.target.value)}
                      className="h-12 border-gray-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-blue-500 mb-2">
                      Dosage
                    </label>
                    <Select
                      value={medication.dosage}
                      onValueChange={(value) => updateMedication(medication.id, 'dosage', value)}
                    >
                      <SelectTrigger className="h-12 border-gray-200 rounded-xl">
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
                    <label className="block text-sm text-blue-500 mb-2">
                      Frequency
                    </label>
                    <Select
                      value={medication.frequency}
                      onValueChange={(value) => updateMedication(medication.id, 'frequency', value)}
                    >
                      <SelectTrigger className="h-12 border-gray-200 rounded-xl">
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
                    <label className="block text-sm text-blue-500 mb-2">
                      From
                    </label>
                    <div className="relative">
                      <Input
                        placeholder="DD/MM/YYYY"
                        value={medication.from}
                        onChange={(e) => updateMedication(medication.id, 'from', e.target.value)}
                        className="h-12 border-gray-200 rounded-xl pl-12"
                      />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-blue-500 mb-2">
                      To
                    </label>
                    <div className="relative">
                      <Input
                        placeholder="DD/MM/YYYY"
                        value={medication.to}
                        onChange={(e) => updateMedication(medication.id, 'to', e.target.value)}
                        className="h-12 border-gray-200 rounded-xl pl-12"
                      />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Timing Buttons */}
                <div className="space-y-3">
                  {/* Before meals row */}
                  <div className="flex space-x-3">
                    <Button
                      type="button"
                      variant={medication.beforeBreakfast ? "default" : "outline"}
                      onClick={() => updateMedication(medication.id, 'beforeBreakfast', !medication.beforeBreakfast)}
                      className={`flex-1 h-12 rounded-xl ${
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
                      className={`flex-1 h-12 rounded-xl ${
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
                      className={`flex-1 h-12 rounded-xl ${
                        medication.beforeDinner 
                          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                          : 'border-blue-200 text-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      Before Dinner
                    </Button>
                  </div>

                  {/* After meals row */}
                  <div className="flex space-x-3">
                    <Button
                      type="button"
                      variant={medication.afterBreakfast ? "default" : "outline"}
                      onClick={() => updateMedication(medication.id, 'afterBreakfast', !medication.afterBreakfast)}
                      className={`flex-1 h-12 rounded-xl ${
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
                      className={`flex-1 h-12 rounded-xl ${
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
                      className={`flex-1 h-12 rounded-xl ${
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
          <div className="mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={addMedication}
              className="border-dashed border-2 border-blue-300 text-blue-500 hover:bg-blue-50 rounded-xl h-12 px-6 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add a medicament</span>
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-12">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="px-12 py-3 h-14 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold text-lg"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              className="px-12 py-3 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg"
            >
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}